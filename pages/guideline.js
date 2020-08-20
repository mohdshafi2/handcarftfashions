import React from 'react'

// styled component
import styled from 'styled-components'

// Icomoon
import IcomoonReact from 'icomoon-react'
import iconSet from '../public/fonts/icomoon/selection'

//custom import
import Layout from "../src/component/Layout/Layout";
import ProductImages from "../src/component/ProductImages/productImages";


const Guideline = () => {
  return (
      <Layout titleTag="Guideline">
        <main>
          <h1 style={{textAlign: 'center'}}>Document Guideline</h1>
          <section>
            <StyledUI>
              <h2>Styled Component Guideline CSS/SCSS/Media</h2>
              <ul>
                <li>TEST 1</li>
                <li>TEST 2</li>
              </ul>
              <p style={{color:'blue', fontSize: '24px'}}>Inline CSS here....</p>
              <div className={'panelBox'}>With Class CSS here...</div>
            </StyledUI>
            <StyledImage>
              <h2>Images Code here</h2>
              <img src="/images/frontend.png" alt=""/>
            </StyledImage>
            <StyledFont>
              <h2>Font Family</h2>
              <p>Font Family ONE</p>
              <strong>Font Family Two</strong>
              <h2>Icommon Icons</h2>
              <div>
                <IcomoonReact iconSet={iconSet} color="red" size={48} icon="e-twitter"/>
                <IcomoonReact iconSet={iconSet} color="red" size={48} icon="e-facebook"/>
                <IcomoonReact iconSet={iconSet} color="red" size={48} icon="e-insta"/>
              </div>
            </StyledFont>
          </section>
          <ProductImages />
        </main>
      </Layout>
  )
}

export default Guideline

const StyledUI = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px;
  h2 {
    color: blue;
    @media (min-width:600px) {
      color: red;
    }
    &:hover {
      color: black;
    }
  }
  ul {
    li {
      color: green;
    }
  }
  .panelBox {
    color: grey;
  }
`
const StyledImage = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px;
  h2 {
    color: red;
  }
  img {
    border-radius: 5px;
  }
`

const StyledFont = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px;
  h2 {
    color: red;
  }
  p {
    font-family: 'ColumbiaSansWDisp';
    font-size: 24px;
    color: green;
    font-weight: 400;
  }
  strong {
    font-family: 'NHaasGroteskTXStd-55Rg';
    font-size: 24px;
    color: green;
    font-weight: 400;
  }
  
 
`

