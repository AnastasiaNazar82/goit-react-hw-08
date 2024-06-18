import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "./../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress...."}</div>
      <ContactList />
    </div>
  );
}
