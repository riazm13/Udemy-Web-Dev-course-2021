function buildTree(array &$elements, $parentId = 0) 
{
    $branch = array();

    foreach ($elements as $element) {
        if ($element['parent_category_id'] == $parentId) {
            $children = buildTree($elements, $element['category_id']);
            if ($children) {
                $element['children'] = $children;
            }
            $branch[$element['category_id']] = $element;
            unset($elements[$element['category_id']]);
        }
    }
    return $branch;
}

