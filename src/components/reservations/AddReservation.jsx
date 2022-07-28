const AddReservation = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div>
      <h2>Add Reservation</h2>
      <form>
        <label htmlFor='nameContent'>Hotel:</label>
        <select id='nameContent' name='nameContent'>
          <option value=''> - Select Hotel - </option>
          {}
        </select>
        <label htmlFor='startDateContent'>Start Date: </label>
        <input id='startDateContent' name='startDateContent' type='date' />
        <label htmlFor='endDateContent'>End Date: </label>
        <input id='endDateContent' name='endDateContent' type='date' />
        <button type='submit' onClick={handleOnSubmit}>
          Reserve
        </button>
      </form>
    </div>
  );
};

export default AddReservation;
