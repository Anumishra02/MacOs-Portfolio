import useWindowStore from "#store/window.js"

const WindowControls = ({target}) => {
    const {closeWindow}=useWindowStore();
  return( 
    <div id='window-controls'>
        <div className='close' onClick={()=>closeWindow(target)}
            />
        <div className="minimize"/>
        <div className="maximize"/>
    </div>
)}

<<<<<<< HEAD
export default WindowControls
=======
export default WindowControls
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
