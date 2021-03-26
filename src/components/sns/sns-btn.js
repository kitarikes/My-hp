import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faSteam} from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

const SNSBtn = () => { 
    return (
        <>
      <a href="https://github.com/kitarikes">
       <FontAwesomeIcon
         color="#333"
         icon={faGithubSquare} size="6x"/>
      </a>

      <a href="https://twitter.com/ki_rii9">
        <FontAwesomeIcon
          color="#3eaded"
          icon={faTwitterSquare} size="6x" />
      </a>
      <a href="https://steamcommunity.com/profiles/76561198332521134">
        <FontAwesomeIcon
          color="#2e5470"
          icon={faSteam} size="6x" />
      </a>

      <h3>My tech-Blog</h3>

      <a href="https://qiita.com/kitarikes">
        <FontAwesomeIcon
          color="white"
          style={{
            overflow: 'hidden',
            height: '0.9em',
            width: '0.9em',
            backgroundColor: '#4cb10d',
            borderRadius: '10px',
            marginTop: '-12px',
          }}
          icon={faSearch} size="6x" />
      </a>
      </>); 
  }

export default SNSBtn