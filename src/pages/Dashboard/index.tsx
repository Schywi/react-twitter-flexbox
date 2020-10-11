import React from 'react';

import { Header, Nav } from './styles/head';
import { Banner } from './styles/banner';
import { Topbar, Toplist } from './styles/topbar';
import { Profile, Info, Followers, Photos, InfoList } from './styles/profile';
import { Timeline, TimeInfo, TimeList } from './styles/timeline';
import {
  Widgets,
  Follow,
  Trends,
  FollowInfo,
  FollowList,
} from './styles/widgets';
import { Wrapper } from './styles/wrapper';

import logoIcon from '../../assets/logo.svg';
import avatarIcon from '../../assets/avatar.png';
import homeIcon from '../../assets/home.svg';
import notificationsIcon from '../../assets/notification.svg';
import messagesIcon from '../../assets/message.svg';
import moreIcon from '../../assets/more.svg';
import placeIcon from '../../assets/place.svg';
import urlIcon from '../../assets/url.svg';
import joinedIcon from '../../assets/joined.svg';
import bornIcon from '../../assets/born.svg';
import followIcon from '../../assets/followers.svg';
import imagesIcon from '../../assets/images.svg';
import commentsIcon from '../../assets/comments.svg';
import retweetIcon from '../../assets/retweet.svg';
import likeIcon from '../../assets/like.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Barra de navegação */}
      <Header>
        <div className="content">
          <Nav>
            <ul>
              <li>
                <img src={homeIcon} alt="Home" /> Home
              </li>
              <li>
                <img src={notificationsIcon} alt="Notifications" />
                Notifications
              </li>
              <li>
                <img src={messagesIcon} alt="Messages" />
                Messages
              </li>
            </ul>
          </Nav>
          <img src={logoIcon} alt="Logo Twitter" />
          <div>
            <input type="text" placeholder="Search on Twitter" />
            <img src={avatarIcon} alt="Avatar" />
            <button type="button"> Tweet</button>
          </div>
        </div>
      </Header>

      <Banner>
        <h1>Lucas Miranda</h1>
      </Banner>

      <Topbar>
        <div className="content">
          <Toplist>
            <li>
              <span>Tweets</span>
              <strong>3931</strong>
            </li>
            <li>
              <span>Followings</span>
              <strong>654</strong>
            </li>
            <li>
              <span>Followers</span>
              <strong>387</strong>
            </li>
            <li>
              <span>Favorites</span>
              <strong>265</strong>
            </li>
          </Toplist>
          <div>
            <button type="button">Follow</button>
            <img src={moreIcon} alt="More icon" />
          </div>
        </div>
      </Topbar>

      <div className="content">
        <Wrapper>
          <Profile>
            <Info>
              <img src={avatarIcon} alt="" />
              <h1>Lucas Miranda</h1>
              <span>@Exibit</span>
              <p>Student at SENAI FIEMG @LetStudy</p>
            </Info>

            <InfoList>
              <li>
                <img src={placeIcon} alt="Place icon" />
                Belo Horizonte, Brazil
              </li>
              <li>
                <img src={urlIcon} alt="Url icon" />

                <a href="https://schywi.github.io/personal-website/projects">
                  personal-site
                </a>
              </li>
              <li>
                <img src={joinedIcon} alt="Joined icon" />
                Joined April 2020
              </li>
              <li>
                <img src={bornIcon} alt="Born icon" />
                Born the 12th of April 2001
              </li>
            </InfoList>

            <Followers>
              <strong>
                <img src={followIcon} alt="" />
                73 followers that you know
              </strong>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Followers>

            <Photos>
              <strong>
                <img src={imagesIcon} alt="" />
                265 Photos and Videos
              </strong>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Photos>
          </Profile>

          <Timeline>
            <nav>
              <a href="/#">Tweets</a>
              <a href="/#">Tweets and replies</a>
              <a href="/#">Medias</a>
            </nav>

            <TimeList>
              <li>
                <div className="profile">
                  <img className="avatar" src={avatarIcon} alt="" />
                  <TimeInfo>
                    <strong>
                      Spade <span>@spade_be</span>
                    </strong>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      sunt dolores. Aspernatur. Lorem, ipsum dolor sit amet
                    </p>
                    <div className="icons">
                      <a href="/#">
                        <img src={commentsIcon} alt="" />3
                      </a>
                      <a href="/#">
                        <img src={retweetIcon} alt="" />4
                      </a>
                      <a href="/#">
                        <img src={likeIcon} alt="" />5
                      </a>
                    </div>
                  </TimeInfo>
                </div>
              </li>
              <li>
                <div className="profile">
                  <img className="avatar" src={avatarIcon} alt="" />
                  <TimeInfo>
                    <strong>
                      Spade <span>@spade_be</span>
                    </strong>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      sunt dolores. Aspernatur. Lorem, ipsum dolor sit amet
                    </p>
                    <div className="icons">
                      <a href="/#">
                        <img src={commentsIcon} alt="" />3
                      </a>
                      <a href="/#">
                        <img src={retweetIcon} alt="" />4
                      </a>
                      <a href="/#">
                        <img src={likeIcon} alt="" />5
                      </a>
                    </div>
                  </TimeInfo>
                </div>
              </li>
              <li>
                <div className="profile">
                  <img className="avatar" src={avatarIcon} alt="" />
                  <TimeInfo>
                    <strong>
                      Spade <span>@spade_be</span>
                    </strong>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      sunt dolores. Aspernatur. Lorem, ipsum dolor sit amet
                    </p>
                    <div className="icons">
                      <a href="/#">
                        <img src={commentsIcon} alt="" />3
                      </a>
                      <a href="/#">
                        <img src={retweetIcon} alt="" />4
                      </a>
                      <a href="/#">
                        <img src={likeIcon} alt="" />5
                      </a>
                    </div>
                  </TimeInfo>
                </div>
              </li>
            </TimeList>
          </Timeline>

          <Widgets>
            <Follow>
              <div className="widget">
                <div className="title">
                  <strong>Who to follow</strong>
                  <a href="/#">Refresh</a>
                  <a href="/#">View all</a>
                </div>

                <FollowList>
                  <li>
                    <div className="profile">
                      <img src={avatarIcon} alt="" />
                      <FollowInfo>
                        <strong>
                          Spade <span>@spade_be</span>
                        </strong>
                        <button type="button">Follow</button>
                      </FollowInfo>
                    </div>
                    <a href="/#">x</a>
                  </li>
                  <li>
                    <div className="profile">
                      <img src={avatarIcon} alt="" />
                      <FollowInfo>
                        <strong>
                          Spade <span>@spade_be</span>
                        </strong>
                        <button type="button">Follow</button>
                      </FollowInfo>
                    </div>
                    <a href="/#">x</a>
                  </li>
                  <li>
                    <div className="profile">
                      <img src={avatarIcon} alt="" />
                      <FollowInfo>
                        <strong>
                          Spade <span>@spade_be</span>
                        </strong>
                        <button type="button">Follow</button>
                      </FollowInfo>
                    </div>
                    <a href="/#">x</a>
                  </li>
                </FollowList>
              </div>
            </Follow>

            <Trends>
              <div className="widget">
                <div className="title">
                  <strong>Trends</strong>
                  <a href="/#">Change</a>
                </div>
                <ul>
                  <li>
                    <a href="/#">#SportInfoDay</a>
                  </li>
                  <li>
                    <a href="/#">#DevPlenoStack</a>
                  </li>
                  <li>
                    <a href="/#">#AluraDev</a>
                  </li>
                  <li>
                    <a href="/#">#UXDesign</a>
                  </li>
                </ul>
              </div>
            </Trends>
          </Widgets>
        </Wrapper>
      </div>
    </>
  );
};

export default Dashboard;
