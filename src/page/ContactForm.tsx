import {  useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Contact() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {name: "" , email:"", password:""},
    validationSchema: yup.object({
      name: yup.string().required('სახელი სავალდებულოა'),
      email: yup.string().email('არასწორი ელ-ფოსტა').required('ელ-ფოსტა სავალდებულოა'),
      password: yup.string().min(10, 'პაროლი უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს').required('პაროლი სავალდებულოა'),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert('წარმატებით გაიგზავნა!');
      navigate('/');
    }
  });
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px',
      border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>ავტორიზაცია</h2>

      <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>სახელი:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ padding: '8px', marginTop: '5px', borderRadius: '13px', border: '1px solid #ccc' }}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.name}</div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>ელ-ფოსტა:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ padding: '8px', marginTop: '5px', borderRadius: '13px', border: '1px solid #ccc' }}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>პაროლი:</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ padding: '6px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color:
          'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          შესვლა
        </button>

      </form>

      
     

    </div>
  )
}

export default Contact;
