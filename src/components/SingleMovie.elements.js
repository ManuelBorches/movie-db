import styled from 'styled-components';

export const SingleMovieTitle = styled.h1`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const SingleMovieSubtitle = styled.h5`
// TODO: Add styles
`

export const SingleMovieOverviewDescription = styled.p`
// TODO: Add styles
`

/* const mediaQuerySmall = window.matchMedia('(max-width: 380px)');
const mediaQueryMedium = window.matchMedia('(max-width: 380px)');
const mediaQueryLarge = window.matchMedia('(max-width: 380px)');

function responsiveScreen(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less 
    paragraph.textContent = 'This is a narrow screen — 600px wide or less.';
    document.body.style.backgroundColor = 'pink';
  } else {
    /* the viewport is more than than 600 pixels wide 
    paragraph.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'aquamarine';
  }
}

mediaQuerySmall.addEventListener(responsiveScreen); */

export const SingleMovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
    }`
    

export const SingleMovieImage = styled.img`
    margin: 10px;
`

export const SingleMovieOverviewContainer = styled.div`
    font-size: 1.5rem;
    margin-left: 10px;
`