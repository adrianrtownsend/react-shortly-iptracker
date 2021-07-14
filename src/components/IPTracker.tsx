import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface IIpData {
  ip: string;
  location: {
  city: string;
  state: string;
  postalCode: string;
  }
  timezone: string;
  isp: string;
}

const IPTracker = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [ipData] = useState<IIpData>({
    ip: '',
    location: {
      city: '',
      state: '',
      postalCode: ''
    },
    timezone: '',
    isp: ''
  });

  const getIpData = (ipAddress: string) => {
    console.log('ipData: ', ipAddress);
  };

  useEffect(() => {
    const ip = '8.8.8.8';
    getIpData(ip);
  }, [])
  
  return (
    <section className="iptracker">
      <div className="iptracker__header">
        <h2>IP Address Tracker</h2>
        <div className="col-md-7 mx-auto">
          <div className="iptracker__input input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search for any IP address or domain" 
              aria-label="Search for any IP address or domain" 
              aria-describedby="basic-addon2" 
              value={ipAddress}
              name="ipAddress"
              onChange={e => setIpAddress(e.target.value)}
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => getIpData(ipAddress)}
              >&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <div className="iptracker__map">
        <div className="iptracker__stats col-12 px-4">
          <div className="iptracker__stats__container col-md-10 mx-auto row">
            <div className="col-md-3 iptracker__field">
              <p>IP ADDRESS</p>
              <h3>{ipData.ip}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>LOCATION</p>
              <h3>{ipData.location.city} {ipData.location.state} {ipData.location.postalCode}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>TIMEZONE</p>
              <h3>{ipData.timezone}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>ISP</p>
              <h3>{ipData.isp}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPTracker;