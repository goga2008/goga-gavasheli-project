import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 🌟 ტიპი ფორმისთვის
interface ContactForm {
  email: string;
  password: string;
}

function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState<ContactForm>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  // ✅ ვალიდაცია
  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.email) {
      newErrors.email = "ელ-ფოსტა სავალდებულოა!";
    } else if (!/[^\s@]+$/.test(form.email)) {
      newErrors.email = "არასწორი ელ-ფოსტის ფორმატი";
    }

    if (!form.password) {
      newErrors.password = "პაროლი სავალდებულოა!";
    } else if (form.password.length < 6) {
      newErrors.password = "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ ინფუთის ცვლილების ჰენდლერი
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // ✅ ფორმის გაგზავნა
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("მომხმარებელი შევიდა", form);
      alert("ავტორიზაცია წარმატებულია");
      navigate("/");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px',
      border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>ავტორიზაცია</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>ელ-ფოსტა:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: '8px', marginTop: '5px', borderRadius: '13px', border: '1px solid #ccc' }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.email}</div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>პაროლი:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ padding: '6px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.password}</div>
          )}
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color:
          'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          შესვლა
        </button>

      </form>

      
      <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
         თქვენი ანგარიშია? <Link to="/conect">დარეგისტრირდით</Link>
      </p>

    </div>
  )
}

export default Contact;
