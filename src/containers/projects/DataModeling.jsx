import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import data from "../../resources/projects/data-modeling-modal.png";

const DataModeling = ({ toggle }) => {

  return (
    <ProjectModal
      title="Web-based Interactive Data Visualization"
      toggleModal={toggle}
      stack={["React.js", "D3.js", "Google Colab", "Python", "pandas"]}
      banner={data}
      bannerAlt="CSCE 411 - Data Modeling"
    >
      <br />
      <Typography variant="body1">
        Our fourth (and final) assignment of the CSCE 411 (Data Modeling) course I was enrolled in
        tasked us with, mainly, enabling web-based visualizaton for a dataset of states, their populations,
        and their GDP. Simply put, we were to take the spreadsheet data and graph it into some
        meaningful insights using JavaScript's Data-Driven Documents library, 
        or <a href="https://d3js.org/">D3.js</a> for short.
      </Typography>
      <br />

      <Typography variant="body1">
        D3.js is a JavaScript library for manipulating documents based on data. 
        D3 helps you bring data to life using HTML, SVG, and CSS. 
        D3’s emphasis on web standards gives you the full capabilities of modern browsers 
        without tying yourself to a proprietary framework, combining powerful 
        visualization components and a data-driven approach to DOM manipulation.
      </Typography>
      <br />

      <Typography variant="body1">
        I worked on this project alongside <a href="https://www.linkedin.com/in/christian-berck-9ba188170/">Christian Berck</a> and <a href="https://www.linkedin.com/in/easton-joachimsen/">Easton Joachimsen.</a>
        You can see the final result of our work hosted live <a href="https://csce411-assignment4.netlify.app/">here.</a>
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <Typography variant="body1">
        Through this assignment, my team and I learned how to leverage the D3.js visualization library to create interactive
        web-based visualizations, specifically bar charts and scatterplots, out of a comma-separated value data source.
        The skills we learned in utilizing D3.js translated incredibly well to a later assignment we worked on together
        when we picked up the Chart.js library for further data visualization needs. Along with this, in the other half
        of the assignment, we worked with Python, the pandas library, and Google Colab to devise the Apriori algorithm
        from scratch, a frequent item set mining algorithm.
      </Typography>
      <br />
    </ProjectModal>
  )
};

export default DataModeling;