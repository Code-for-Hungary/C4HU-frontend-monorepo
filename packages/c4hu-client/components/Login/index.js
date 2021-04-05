import { Form, Input, Button, Row, Col, Alert } from 'antd';
import styled from 'styled-components';
import axios from 'axios'
import { useCallback, useState } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const RowStyled = styled(Row)`
  height: calc(100vh - 133px);
`

const FormStyled = styled(Form)`
  padding: 24px;
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
`

const AlertStyled = styled(Alert)`
  margin-bottom: 12px;
`

const Login = ({ onSuccess = () => null }) => {
  const { md } = useBreakpoint()

  const [error, setError] = useState()

  const handleFormFinish = useCallback(({ username, password }) => {

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_ELEVEBACKEND_URL}/users/login`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }      
    }).then(({ data }) => {
      const token = data.token
      onSuccess(token)
    }).catch(error => {
      setError('Belépési hiba')
      console.log({error})
    })
  })

  return (
    <RowStyled type="flex" align="middle" justify="center">
      <Col span={md ? 12 : 24}>
        <FormStyled
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleFormFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Adj meg felhasználónevet',
              },
            ]}
          >
            <Input
              placeholder="felhasználónév (email)"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Adj meg jelszót',
              },
            ]}
          >
            <Input.Password placeholder="jelszó" />
          </Form.Item>

          {error && <AlertStyled type="error" message={error} />}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Belépés
            </Button>
          </Form.Item>
        </FormStyled>
      </Col>
    </RowStyled>    
  );
};

export default Login
