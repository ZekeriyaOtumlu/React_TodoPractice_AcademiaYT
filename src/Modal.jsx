function Modal(props){

    function cancelHanndler(){
        props.onCancel();

    }

    function confirmHandler(){
        props.onConfirm();

    }
    return(
<div className="modal">
    <p>Are you sure?</p>
    <button className="btn btn--alt" onClick={cancelHanndler}>Cancel</button>
    <button className="btn" onClick={confirmHandler}>Confirm</button>
</div>
    );
};
export default Modal;