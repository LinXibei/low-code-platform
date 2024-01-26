const manageAndEmit = ['Start', 'Add', 'Remove', 'Update', 'End'];
const emit = ['Choose', 'Unchoose', 'Sort', 'Filter', 'Clone'];
const manage = ['Move'];
const eventHandlerNames = [manage, manageAndEmit, emit].flatMap(events => {
  return events.map((event) => {
    return `on${event}`;
  });
});
interface SortableEventsType {
  manage: string[],
  manageAndEmit: string[],
  emit: string[],
  [key: string]: Array<string>
}
const events: SortableEventsType = {
  manage,
  manageAndEmit,
  emit
}
function isReadOnly(eventName: string) {
  return eventHandlerNames.indexOf(eventName) !== -1
}
export {
  events,
  isReadOnly,
}