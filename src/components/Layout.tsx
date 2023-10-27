import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Background>
      <Card>
        <Container>
          {props.children}
          </Container>
      </Card>
    </Background>
  )
}


export default Layout;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #F5F9FF;
  height:100vh;
  weight:100vw;
  
`;

const Card = styled.div`
  border-radius: 32px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  
  max-width: 1000px;
  min-height: 670px;
  width: 100%;
  height: 100%;
  

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


`;

const Container= styled.div`
  padding: 42px 0px;
`;