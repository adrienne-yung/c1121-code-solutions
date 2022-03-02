/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const nextList = list.next.data;
    const currentList = list.data;
    list.data = nextList;
    list.next.data = currentList;
    return list;
  } else {
    return list;
  }
}
