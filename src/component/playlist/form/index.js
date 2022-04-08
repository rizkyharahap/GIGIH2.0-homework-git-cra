import { useCallback, useState } from 'react';
import './index.css';

const FormPlaylist = ({
  defaultValue = {
    name: '',
    description: '',
  },
  onSubmit,
}) => {
  const [form, setForm] = useState(defaultValue);

  // Handle input change and set to state
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Remove event default and callback to onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form-playlist" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="fName">Name</label>
        <input
          id="fName"
          type="text"
          name="name"
          title="Name Field"
          className="text-field"
          placeholder="Write name here..."
          required
          minLength={10}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-control">
        <label htmlFor="fDescription">Description</label>
        <textarea
          id="fDescription"
          name="description"
          title="Description Field Area"
          className="text-field"
          placeholder="Write description here..."
          rows="3"
          required
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button className="btn btn-playlist-save" type="submit">
        SAVE
      </button>
    </form>
  );
};

export default FormPlaylist;
