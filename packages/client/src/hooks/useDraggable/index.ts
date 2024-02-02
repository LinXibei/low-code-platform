export default function useDraggable() {
  const state = {
    
  }
  const dragStart = () => {
    console.log('dragStart')
  }
  const dragMove = () => {
    console.log('dragMove')
  }
  const dragEnd = () => {
    console.log('dragEnd')
  }
  return {
    state,
    dragStart,
    dragMove,
    dragEnd
  }
}