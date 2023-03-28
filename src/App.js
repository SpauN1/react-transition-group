import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './App.css';

const Modal = (props) => {
  const duration = 300;

  return (
    <CSSTransition
      in={props.show}
      timeout={duration}
      onEnter={() => props.setShowTrigger(false)}
      onExited={() => props.setShowTrigger(true)}
      classNames="modal"
      mountOnEnter
      unmountOnExit
    >
      <div className="modal mt-5 d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Typical modal window</h5>
              <button
                onClick={() => props.onClose(false)}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body content</p>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => props.onClose(false)}
                type="button"
                className="btn btn-secondary"
              >
                Close
              </button>
              <button
                onClick={() => props.onClose(false)}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  return (
    <Container>
      <Modal
        show={showModal}
        onClose={setShowModal}
        s
        setShowTrigger={setShowTrigger}
      />
      {showTrigger ? (
        <button
          type="button"
          className="btn btn-warning mt-5"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      ) : null}
    </Container>
  );
}

export default App;

// Примеры.

// №2 Charlist

// function renderItems(arr) {
//   const items = arr.map((item, i) => {
//     let imgStyle = { objectFit: 'cover' };
//     if (
//       item.thumbnail ===
//       'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
//     ) {
//       imgStyle = { objectFit: 'unset' };
//     }

//     return (
//       <CSSTransition key={item.id} timeout={500} classNames="char__item">
//         <li
//           tabIndex={0}
//           className="char__item"
//           ref={(el) => (itemRefs.current[i] = el)}
//           key={item.id}
//           onClick={() => {
//             props.onCharSelected(item.id);
//             focusOnItem(i);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === ' ' || e.key === 'Enter') {
//               props.onCharSelected(item.id);
//               focusOnItem(i);
//             }
//           }}
//         >
//           <img src={item.thumbnail} alt={item.name} style={imgStyle} />
//           <div className="char__name">{item.name}</div>
//         </li>
//       </CSSTransition>
//     );
//   });

//   return (
//     <ul className="char__grid">
//       <TransitionGroup className="char__grid">{items}</TransitionGroup>
//     </ul>
//   );
// }

// .char__item-enter (style)

// img {
//   border-radius: 20px;
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   transform: translate(-15px, -15px);
// }
// &-enter {
//   transform: translateX(-750px) rotate(90deg);
// }
// &-enter-active {
//   transform: translateX(-750px) rotate(90deg);
//   transition: all 500ms;
// }
// &-enter-done {
//   transition: all 500ms;
// }
// &_selected {
//   box-shadow: 0 5px 20px $main-color;
//   transform: translateY(-8px);
//   transition: all 300ms;
// }

// №2 ComicsList

// function renderItems(arr) {
//   const items = arr.map((item, i) => {
//     return (
//       <CSSTransition key={item.id} timeout={500} classNames="comics__item">
//         <li className="comics__item" key={i}>
//           <Link to={`/comics/${item.id}`}>
//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               className="comics__item-img"
//             />
//             <div className="comics__item-name">{item.title}</div>
//             <div className="comics__item-price">{item.price}</div>
//           </Link>
//         </li>
//       </CSSTransition>
//     );
//   });

//   return <TransitionGroup className="comics__grid">{items}</TransitionGroup>;
// }

// .comics__item-enter (style)

// &-enter {
//   transform: scale(0);
// }
// &-enter-active {
//   transform: scale(0);
//   transition: all 500ms;
// }
// &-enter-done {
//   transform: scale(1);
//   transition: all 500ms;
// }