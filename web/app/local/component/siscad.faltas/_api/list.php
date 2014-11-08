<?php

if (!isset ($_uri [2]) || !is_numeric ($_uri [2]))
	throw new ApiException (__ ('Invalid URI!'), ApiException::ERROR_INVALID_PARAMETER, ApiException::BAD_REQUEST);

if (Api::getHttpRequestMethod () != Api::GET)
	throw new ApiException (__ ('Invalid URI request method!'), ApiException::ERROR_INVALID_PARAMETER, ApiException::METHOD_NOT_ALLOWED);

$_TIME = (int) $_uri [2];

$entity = new ApiList ('api-list.xml', 'api-get.xml', 'api.xml');

$update = $entity->getField ('_API_UPDATE_UNIX_TIMESTAMP_');

if (is_object ($update))
	$columnUp = $update->getTable () .'.'. $update->getColumn ();
else
	$columnUp = $entity->getTable () . '._update';

if (!$entity->load ($_TIME ." < extract (epoch from ". $columnUp .")::integer"))
	throw new Exception (__ ('Unable to load data!'));

$json = array ();

while ($entity->getItem ())
{
	$itemId = $entity->getId ();
	
	$object = array ();
	
	if ($entity->useCode ())
		$object [$entity->getCodeColumn ()] = $entity->getCode ();
	else
		$object [$entity->getPrimary ()] = $itemId;
	
	while ($field = $entity->getField ())
		$object [$field->getApiColumn ()] = ApiEntity::toApi ($field, $itemId);
	
	$json [] = (object) $object;
}

header ('Content-Type: application/json; charset=UTF-8');

echo json_encode ($json);