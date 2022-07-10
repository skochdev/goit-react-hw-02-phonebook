import s from './Contact.module.css';

export default function Contact({ name, phone }) {
  return (
    <div className={s.contactDataWrapper}>
      <p className={s.contactData}>{name}</p>
      <p className={s.contactData}>{phone}</p>
    </div>
  );
}
