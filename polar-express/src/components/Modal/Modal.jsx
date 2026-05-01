import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../../redux-store/modal-store'
import { authActions } from '../../redux-store/auth-store'

const Modal = () => {
  const isModalOpened = useSelector(state => state.modal.isModalOpened);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

    const onOverlayHandler = ({target}) => {
        if (!target.classList.contains('modal-wrapper')) {
          return
        }

        dispatch(modalActions.closeModal())
    }

    const onClickHandler = () => {
        const action = isAuth ? authActions.logOut : authActions.login

        dispatch(action())
        dispatch(modalActions.closeModal())
    }


    return <>
        {isModalOpened ?
            <div className='modal-wrapper' onClick={onOverlayHandler}>
                <div className='modal-window'>
                  <input style={{width: '300px'}} type="text" placeholder='Enter your login' />

                  <button style={{wdth: '100px'}} type='button' onClick={onClickHandler}>{isAuth ? 'Logout' : 'Login'}</button>
                </div>
            </div>
            : null
        }
    </>
}

export default Modal;
