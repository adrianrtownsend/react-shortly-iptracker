import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvent } from 'react-leaflet'

interface IIpData {
  ip: string;
  location: {
      country: string
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
      geonameId: number;
  },
  as: {
      asn: number;
      name: string;
      route: string;
      domain: string;
      type: string;
  },
  isp: string;
  proxy: {
      proxy: boolean;
      vpn: boolean;
      tor: boolean;
  }
}

const IPTracker = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [ipData, setIpData] = useState<IIpData | undefined>();
  const [mapCoor, setMapCoor] = useState({lat: 37.38605, lng: -122.08385});

  const getLocation = (ipAddress?: string) => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_LEAFLET_API_KEY}&ipAddress=${ipAddress ? ipAddress : ''}`)
    .then(res => res.json())
    .then(
      res => {        
        console.log('leaflet response: ', res);
        setIpData(res);
      },
      err => {
        console.log('error: ', err);
      }
    );
  };

  // on load get user's location
  useEffect(() => {
    getLocation();
  },[]);
  
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
              onKeyPress={e => { if(e.key === 'Enter') getLocation(ipAddress) }}
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={() => getLocation(ipAddress)}
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
              <h3>{ipData ? ipData.ip : '--'}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>LOCATION</p>
              <h3>{ipData ? `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}` : '--'}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>TIMEZONE</p>
              <h3>{ipData ? ipData.location.timezone : '--'}</h3>
            </div>
            <div className="col-md-3 iptracker__field">
              <p>ISP</p>
              <h3>{ipData ? ipData.isp : '--'}</h3>
            </div>
          </div>
        </div>
        <MapContainer 
          className="w-100 h-100 iptracker__map"
          center={[mapCoor.lat, mapCoor.lng]} 
          zoom={13} 
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[mapCoor.lat, mapCoor.lng]}>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default IPTracker;