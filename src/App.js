import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MainDiv>
        <Div1>
          <div>
            <h5>FLEESO</h5>
          </div>
          <div>
            <Htag>Start your journey with us</Htag>
            <Ptag>
              Discover the world's best community of freelancers and business
              owners.
            </Ptag>
          </div>
          <SubDiv1>
            <div>
              <p>
                Simply unbelievable! I am really satisfied with my projects and
                business. This is absolute wonderful.
              </p>
            </div>
            <ImgDiv>
              <ImgSubDiv1>
                <img
                  alt=""
                  src="./assets/logo.png"
                  height={55}
                  width={55}
                ></img>
              </ImgSubDiv1>
              <ImgSubDiv2>
                <p>Saad Khan</p>
                <p>Freelancer</p>
              </ImgSubDiv2>
            </ImgDiv>
          </SubDiv1>
        </Div1>

        <Div2>
          <div>
            <h1>Sign Up</h1>
            <p>
              <b>Have an account</b>
            </p>
          </div>
          <div>
            <Label>Looking for?</Label>
            <br />
            <Form>
              <RadioDiv>
                <input type="radio" name='type' value="programmer"></input>
                <label>Programmer</label>
              </RadioDiv>
              <RadioDiv>
                <input type="radio" name='type' value="designer"></input>
                <label>Designer</label>
              </RadioDiv>
            </Form>
          </div>
          <div>
            <Label for="email">Email</Label>
            <br />
            <Field type="email" name="email"></Field>
          </div>
          <div>
            <Label for="password">Password</Label>
            <br />
            <Field type="password" name="password"></Field>
          </div>
          <div>
            <Label for="skills">Select your skills</Label>
            <br />
            <Field type="text" name="skills" placeholder="Type to search..."></Field>
            <br />
            <TagDiv>
            <Tag>
            <span>Illustration</span>
            <Button>x</Button>
            </Tag>
            <Tag>
            <span>Branding</span>
            <Button>x</Button>
            </Tag>
            </TagDiv>
          </div>
          <div>
            <CreateButton>Create Account</CreateButton>
          </div>
        </Div2>
      </MainDiv>
    </Container>
  );
}

export default App;

//Styled Component
const Container = styled.div`
  padding-left: 50px;
  padding-right 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #D3D3D3;
  `;

const MainDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-columns: 350px auto;
  width: 1000px;
  grid-column-gap: 8px;
  border-radius: 12px;
  margin-left: 120px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Div1 = styled.div`
  color: white;
  background-color: #1f51ff;
  border-radius: 15px;
  padding: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
  display: grid;
  grid-template-rows: 100px 250px 200px;
`;

const Htag = styled.h3`
  font-size: 30px;
`

const Ptag = styled.p`
  font-weight: lighter;
`;

const SubDiv1 = styled.div`
  border-radius: 15px;
  padding: 10px;
  font-size: 14px;
  background-color: #3457D5;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgSubDiv1 = styled.div`
  margin-top: 10px;
`;

const ImgSubDiv2 = styled.div`
  margin-left: 5px;
`;

const Div2 = styled.div`
  display: grid;
  grid-template-rows: 140px 100px 80px 80px 140px 130px;
  padding: 40px;
  margin-top: 3px;
  margin-right: 8px;
`;

const Label = styled.label`
  font-weigth: bold;
  color: #808080;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 250px;
  margin-top: 4px;
`;

const RadioDiv = styled.div`
  padding: 15px;
  margin-top: 4px;
  border: 1px solid black;
  border-radius: 8px;
  width: 180px;
`;

const Field = styled.input`
  margin-top: 4px;
  padding: 8px;
  width: 450px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid grey;
`

const TagDiv = styled.div`
  display: grid;
  grid-template-columns: 110px 110px;
  grid-column-gap: 6px;
`

const Tag = styled.div`
  margin-top: 8px;
  border-radius: 5px;
  background-color: #E5E4E2;
  width: 95px;
  padding: 5px;
`

const Button = styled.button`
  background-color: #E5E4E2;
  color: #899499;
  border: white;
`
const CreateButton = styled.button`
  padding: 10px;
  border: white;
  width: 160px;
  height: 50px;
  background-color: #1f51ff;
  color: white;
  border-radius: 10px;
`


