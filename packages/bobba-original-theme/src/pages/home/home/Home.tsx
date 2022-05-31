import React, {useContext} from 'react';
import {setURL} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {rpUserContext} from '@instinct-plugin/bobba-rp-web';
import {BetaNoticeCard} from './beta-notice-card/BetaNoticeCard';
import {GetInTouchCard} from './get-in-touch-card/GetInTouchCard';
import {Container} from '../../../components/generic/container/Container';
import {MyProfile} from '../../../components/templates/my-profile/MyProfile';
import {RecentNews} from '../../../components/templates/recent-news/RecentNews';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card/MyEmploymentCard';
import {HotRoomsCard} from './hot-rooms/HotRooms';

setURL('me', <Home />);
setURL('home', <Home />);
setURL('welcome', <Home />);

export function Home() {
  const {rpUser} = useContext(rpUserContext);
  return (
    <UserLayout>
      <Container>
        <div className="row">
          <div className="col-8">
            <MyProfile />
          </div>
          <div className="col-4">
            <RecentNews />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8">
            {rpUser && <MyEmploymentCard user={rpUser} />}
          </div>
          <div className="col-4">
            <BetaNoticeCard />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8" />
          <div className="col-4">
            <GetInTouchCard />
          </div>
        </div>
      </Container>
    </UserLayout>
  );
}
