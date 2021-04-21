import { Layout as AntLayour, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Link from 'next/link'
import PoweredByVercel from '../PoweredByVercel';

const { Header, Content, Footer } = AntLayour;

const SiteLayoutContent = styled.div`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`

const LogoPlaceholder = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`

const FooterStyled = styled(Footer)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <AntLayour className="layout">
      <Header>
        <LogoPlaceholder />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Projektek</Menu.Item>
          <Menu.Item key="2">Önkéntesek</Menu.Item>
          <Menu.Item key="3">Oktató anyagok</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Kezdőoldal</Breadcrumb.Item>
          <Breadcrumb.Item><Link href="/projects">Projektek</Link></Breadcrumb.Item>
        </Breadcrumb>
        <SiteLayoutContent>{children}</SiteLayoutContent>
      </Content>
      <FooterStyled>
        <span>C4HU ©2021 </span>
        <a href="https://vercel.com?utm_source=C4HU&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
          <PoweredByVercel />
        </a>
      </FooterStyled>

    </AntLayour>
  </>
)

export default Layout
