// HostLandingPage.jsx
import React from 'react';
import Header from '../../sharedComponents/src/Header/Header';
import Footer from '../../sharedComponents/src/Footer/Footer';
import HostComponent from './HostComponent';
import UploadFile from './UploadFile';

const RemoteButton = React.lazy(() => import('remote/Button'));

function HostLandingPage() {
  

  return (
    <div className="HostLandingPage">
      <Header />
      <h1>Basic Host-Remote</h1>
      <HostComponent title="Host Component Title" />
      <h2>Host</h2>
      
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
        <UploadFile/>
      </React.Suspense>
      <Footer />
    </div>
  );
}

export default HostLandingPage;
