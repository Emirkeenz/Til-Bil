import React from 'react';
import { styled } from 'styled-components';
import mainImage from '../../../images/asia-businesswoman-social-distancing-new-normal-situation-virus-prevention-looking-camera-presentation-friends-about-plan-video-call-while-work-office-lifestyle-after-corona-virus.svg';
import peopleImage from '../../../images/people.svg';
import closeVideo from '../../../images/close-video.svg';
import audioIcon from '../../../images/audio-icon.svg';
import screenIcon from '../../../images/screen-icon.svg';
import subtitle from '../../../images/subtitle.svg';
import chatUserImage from '../../../images/chat-user-image.svg';
import chatAminaUserImage from '../../../images/amina.svg';
import emosition from '../../../images/emoji-happy.svg';
import send from '../../../images/vuesax/bold/send-2.svg';

const StyledOnlineLessons = styled.div`
  padding: 2rem 0;

  width: 100%;
  height: 100%;

  overflow: auto;

  & .container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  .headline {
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    color: #0e5ea3;
  }

  & .content {
    height: 100%;
    width: 100%;
  }

  & .wrapper {
    height: 100%;

    display: grid;
    grid-template-columns: 70% 30%;

    gap: 2rem;

    & .wrapper-content {
      border-radius: 10px;

      padding: 1rem;

      background: #f9fafb;

      display: grid;

      box-shadow: 0px 4px 50px 0px #c8bedf;
      & .wrapper-content-header {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;

        align-items: center;

        padding-top: 1rem;

        & .share {
          justify-self: flex-end;

          font-size: 11px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;

          padding: 10.07px 19px;
          border-radius: 21.68px;

          border: 0.5px solid;
        }
      }

      & .main-picture {
        & figure {
          & img {
            aspect-ratio: 4/2.5;
            height: 100%;
            width: 100%;
          }
        }
      }

      & .pictures {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
        gap: 1.5rem;

        & figure {
        }
      }

      & .actions {
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 2fr 0.5fr 0.5fr;

        justify-self: center;

        width: 60%;

        padding-top: 1.5rem;

        & .main {
          font-size: 11px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0em;
          text-align: left;

          background: #f1414f;

          border-radius: 21.68px;

          padding: 0.5rem;

          display: grid;
          place-items: center;

          width: 90%;
        }
      }
    }

    & .wrapper-left-sidebar {
      display: grid;
      grid-template-rows: 0.3fr 2fr 1fr;
      gap: 1rem;

      padding: 1rem;

      border-radius: 10px;

      background: #f9fafb;

      box-shadow: 0px 4px 50px 0px #c8bedf;

      & .left-sidebar-headline {
        display: grid;
        place-items: center;
        gap: 1rem;

        & .typography {
          font-size: 19px;
          font-weight: 600;
          line-height: 28px;
          letter-spacing: 0em;
          text-align: center;
        }

        & .description {
          font-size: 9px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: center;

          width: 80%;

          color: #818a98;
        }
      }

      & .left-sidebar-chat {
        display: grid;
        gap: 1rem;

        grid-template-rows: 0.2fr 0.2fr 0.2fr 1fr;

        & .user-image {
          & picture {
            & img {
              border-radius: 50%;
            }
          }
        }
        & .chat-user-card {
          display: grid;
          grid-template-columns: 0.7fr 3fr;
          align-items: center;

          & .user-wrapper {
            display: flex;
            flex-wrap: wrap;
            background: #fff;
            padding: 1rem;

            & .user-name {
              width: 50%;

              font-size: 11px;
              font-weight: 400;
              line-height: 14px;
              letter-spacing: 0em;
              text-align: left;

              color: #176dee;
            }

            & .user-time {
              width: 50%;
              text-align: right;

              font-size: 11px;
              font-weight: 400;
              line-height: 14px;
              letter-spacing: 0em;

              color: #b9bec6;
            }

            & .message {
              font-size: 11px;
              font-weight: 400;
              line-height: 14px;
              letter-spacing: 0em;
              text-align: left;
            }
          }
        }
      }

      & .send-input {
        align-self: flex-end;

        background: #ffffff;

        padding: 0.5rem;

        border-radius: 10px;

        display: grid;
        grid-template-columns: 0.5fr 3fr 0.5fr;

        place-items: center;

        & input {
          border: none;

          width: 100%;
          min-width: 100%;
          height: 100%;
          outline: none;
        }

        & .emosion {
          border-radius: 5.42px;

          width: 30.98px;
          height: 30.98px;

          background: #eeb216;
          height: 80%;
        }

        & button {
          background: #176dee;

          width: 30.98px;
          height: 30.98px;

          border-radius: 5.42px;

          border: none;
          display: grid;
          place-items: center;
        }
      }
    }
  }
`;

const OnlineLessons = () => {
  return (
    <StyledOnlineLessons>
      <div className="container">
        <div className="content">
          <div className="wrapper">
            <div className="wrapper-content">
              <div className="headline">Онлайн сабактар</div>
              <div className="wrapper-content-header">
                <div className="date">30 Тогуздун айы 2023</div>

                <div className="todo_list">Жаздыруу 26:32</div>

                <button className="share">Бөлүшү</button>
              </div>

              <picture className="main-picture">
                <figure>
                  <img src={mainImage} alt={mainImage} />
                </figure>
              </picture>

              <picture className="pictures">
                <figure>
                  <img src={peopleImage} alt={peopleImage} />
                </figure>
                <figure>
                  <img src={peopleImage} alt={peopleImage} />
                </figure>
                <figure>
                  <img src={peopleImage} alt={peopleImage} />
                </figure>
                <figure>
                  <img src={peopleImage} alt={peopleImage} />
                </figure>
              </picture>

              <div className="actions">
                <div className="close-video">
                  <img src={closeVideo} alt="close video icon" />
                </div>
                <div className="audio">
                  <img src={audioIcon} alt="audio toggle icon" />
                </div>
                <div className="main">Жандуу сабак</div>
                <div className="screen">
                  <img src={screenIcon} alt="screen" />
                </div>
                <div className="subtitle">
                  <img src={subtitle} alt="subtitle" />
                </div>
              </div>
            </div>

            <div className="wrapper-left-sidebar">
              <div className="left-sidebar-headline">
                <div className="typography">Билдирүү</div>
                <div className="description">Бул жактан башка катышуучулар менен сүйлөшө аласыңар.</div>
              </div>

              <div className="left-sidebar-chat">
                <div className="chat-user-card">
                  <picture className="user-image">
                    <figure>
                      <img src={chatUserImage} alt={chatUserImage} />
                    </figure>
                  </picture>

                  <div className="user-wrapper">
                    <div className="user-name">Amir</div>
                    <div className="user-time">9:20</div>
                    <div className="message">Hello guys, How are you doing?</div>
                  </div>
                </div>

                <div className="chat-user-card">
                  <picture className="user-image">
                    <figure>
                      <img src={chatAminaUserImage} alt={chatAminaUserImage} />
                    </figure>
                  </picture>

                  <div className="user-wrapper">
                    <div className="user-name">Amina</div>
                    <div className="user-time">9:21</div>
                    <div className="message">Жакшы, кыргыз тилинде жазышалы </div>
                  </div>
                </div>

                <div className="chat-user-card">
                  <picture className="user-image">
                    <figure>
                      <img src={chatAminaUserImage} alt={chatAminaUserImage} />
                    </figure>
                  </picture>

                  <div className="user-wrapper">
                    <div className="user-name">Amina</div>
                    <div className="user-time">9:24</div>
                    <div className="message">Hey guys, ооба, бирок мен дагы аракет кылам?</div>
                  </div>
                </div>
              </div>

              <div className="send-input">
                <img className="emosion" src={emosition} alt={emosition} />
                <input type="text" placeholder="Билдирүү жазуу..." />
                <button>
                  <img src={send} alt={send} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledOnlineLessons>
  );
};

export default OnlineLessons;
