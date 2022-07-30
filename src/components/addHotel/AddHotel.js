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

  return (
    <section className="form-section">
      <form id="form-data" onSubmit={(e) => e.preventDefault()}>

        <div className="section-form">
          <h2>Location</h2>

          <div className="checkbox">
            <label htmlFor="Country">
              Country
              <input
                id="Country"
                type="text"
                name="country"
                value={values.country}
                onChange={(e) => {
                  setValues({ ...values, country: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="state">
              State
              <input
                id="state"
                type="text"
                name="state"
                value={values.state}
                onChange={(e) => {
                  setValues({ ...values, state: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="city">
              City
              <input
                id="city"
                type="text"
                name="city"
                value={values.city}
                onChange={(e) => {
                  setValues({ ...values, city: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="neighbourhood">
              Neighbourhood
              <input
                id="neighbourhood"
                type="text"
                name="neighbourhood"
                value={values.neighbourhood}
                onChange={(e) => {
                  setValues({ ...values, neighbourhood: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="street">
              Street
              <input
                type="text"
                name="street"
                value={values.street}
                onChange={(e) => {
                  setValues({ ...values, street: e.target.value });
                }}
              />
            </label>

          </div>

          <div className="checkbox">
            <label htmlFor="number">
              Number
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

          <div className="checkbox">
            <label htmlFor="complement">
              Complement
              <input
                type="complement"
                name="complement"
                value={values.complement}
                onChange={(e) => {
                  setValues({ ...values, complement: e.target.value });
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

          <div className="checkbox inverse">
            <label htmlFor="pool">
              Pool
              <input
                type="checkbox"
                name="pool"
                value={values.pool}
                onChange={(e) => {
                  setValues({ ...values, pool: e.target.checked });
                }}
              />
            </label>

          </div>

          <div className="checkbox inverse">
            <label htmlFor="bar">
              Bar
              <input
                type="checkbox"
                name="bar"
                value={values.bar}
                onChange={(e) => {
                  setValues({ ...values, bar: e.target.checked });
                }}
              />
            </label>

          </div>

          <div className="checkbox inverse">
            <label htmlFor="air_conditioning">
              Air conditioning
              <input
                type="checkbox"
                name="air_conditioning"
                value={values.air_conditioning}
                onChange={(e) => {
                  setValues({ ...values, air_conditioning: e.target.checked });
                }}
              />
            </label>

          </div>

          <div className="checkbox inverse">
            <label htmlFor="tv">
              Tv
              <input
                type="checkbox"
                name="tv"
                value={values.tv}
                onChange={(e) => {
                  setValues({ ...values, tv: e.target.checked });
                }}
              />
            </label>

          </div>

          <div className="checkbox inverse">
            <label htmlFor="gym">
              Gym
              <input
                type="checkbox"
                name="gym"
                value={values.gym}
                onChange={(e) => {
                  setValues({ ...values, gym: e.target.checked });
                }}
              />
            </label>

          </div>

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
