import React, {FC, useState, useEffect} from 'react'

interface Props {
    modalChild?: any;
	modalOpen?: any;
	modalClose?: any;
    className?: string;
    rest?: any;
}

export const Modal: FC<Props> = ({modalChild, modalOpen, modalClose, className}) => {
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        setModal(modalOpen)
    }, [modalOpen])

    return (
        <div
			className={`modal-cont ${!modal && "hidden"}`}
			onClick={() => modalClose && modalClose()}
		>
			<div
				className={`content-cont`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="close-sign">
                    <img src="/icons/cancel.svg" alt="cancel" id="close-modal" onClick={modalClose}/>
				</div>
				<div className={`modal ${className}`}>
					{modalOpen && <div>{modalChild}</div>}
				</div>
			</div>
		</div>
    )
}

