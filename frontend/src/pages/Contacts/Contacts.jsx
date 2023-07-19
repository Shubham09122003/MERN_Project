import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    axiosInstance()
      .get("/get-contacts")
      .then((res) => {
        setContacts(res.data.contacts);
      });
  };

  const deleteContact = (contact_id) => {
    axiosInstance()
      .delete("/delete-contact/" + contact_id)
      .then(() => {
        fetchContacts();
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <div className="contacts-container">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
        <button
          onClick={() => {
            navigate("/add-contact");
          }}
        >
          Add Contact
        </button>
      </div>

      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, idx) => {
              return (
                <tr key={idx}>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("/update-contact/" + contact._id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteContact(contact._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No Contacts Found</p>
      )}
    </>
  );
};

export default Contacts;
