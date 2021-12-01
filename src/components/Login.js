import { Form, Input, Button, Checkbox, Modal } from 'antd';
import {Link} from 'react-router-dom'
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';




  const Login = () => {
  const navigate = useNavigate();
  const [curUser, setCurUser] = useState();
  const [modal, setModal] = useState(false);
  const [modalMes, setModalMes] = useState("");

  onAuthStateChanged(auth, (currentUser) => setCurUser(currentUser));

  const onFinish = async ({ password, email }) => {
      try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          navigate('home');
      } catch (error) {
          setModalMes(error.message);
          setModal(true);
      }
  };

  const logOut = async () => await signOut(auth);

    return (
        <div className="form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Modal title="Basic Modal" visible={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)}>
                {modalMes}
            </Modal>
            <button onClick={logOut}>{curUser?.email}</button>
      <div className="heading"><h1>Login</h1></div>
       <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Login
        </Button>
        <div>
        {'\n'}
        <Link to="/Signup">Don't have account? Sign Up</Link>
        </div>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Login;