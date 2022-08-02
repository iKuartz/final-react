import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postHotelToApi } from '../../redux/hotels/hotels';
import './addHotel.scss';

function AddHotel() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    room: 0,
    pool: false,
    bar: false,
    air_conditioning: false,
    tv: false,
    gym: false,
    country: '',
    state: '',
    city: '',
    neighbourhood: '',
    street: '',
    number: 0,
    complement: '',
    name: '',
    description: '',
    image: null,
  });

  const attributes = ['country', 'state', 'city', 'neighbourhood', 'street', 'complement'];
  const amenities = ['pool', 'bar', 'air_conditioning', 'tv', 'gym'];

  return (
    <section className="form-section">
      <form id="form-data" onSubmit={(e) => e.preventDefault()}>

        <div className="section-form">
          <h2>Location</h2>
          <div className="checkbox">
            {attributes.map((attribute) => (
              <label htmlFor={attribute} key={attribute}>
                {attribute}
                <input
                  id={attribute}
                  type="text"
                  name={attribute}
                  value={values[attribute]}
                  onChange={(e) => {
                    setValues({ ...values, [attribute]: e.target.value });
                  }}
                />
              </label>
            ))}
          </div>
          <div className="checkbox">
            <label htmlFor="number">
              number
              <input
                type="number"
                name="number"
                value={values.number}
                onChange={(e) => {
                  setValues({ ...values, number: e.target.value });
                }}
              />
            </label>
          </div>
        </div>

        <div className="section-form">
          <h2>Hotel data</h2>

          <div className="checkbox">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="description">
              Description(Min. 20 chars)
              <input
                type="text"
                name="description"
                value={values.podescriptionol}
                onChange={(e) => {
                  setValues({ ...values, description: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="room">
              Rooms
              <input
                type="number"
                name="room"
                value={values.room}
                onChange={(e) => {
                  setValues({ ...values, room: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="image">
              Image
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={(e) => {
                  setValues({ ...values, image: e.target.files[0] });
                }}
              />
            </label>

          </div>

          {amenities.map((amenity) => (
            <div className="checkbox" key={amenity}>
              <label htmlFor={amenity}>
                <input
                  id={amenity}
                  type="checkbox"
                  name={amenity}
                  checked={values[amenity]}
                  onChange={(e) => {
                    setValues({ ...values, [amenity]: e.target.checked });
                  }}
                />
                {amenity}
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          onClick={() => {
            const formData = new FormData();

            for (const prop in values) {
              formData.append(`hotel[${prop}]`, values[prop]);
            }
            postHotelToApi(formData);
            navigate('/');
          }}
        >
          submit
        </button>

      </form>
    </section>
  );
}

export default AddHotel;
