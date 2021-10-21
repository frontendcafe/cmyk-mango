import React from 'react';

import styles from './CardMeeting.module.css';
import check from '../../assets/images/check.svg';
import arrow from '../../assets/images/arrow.svg';

function CardMeeting (props) {
    return(
        <div className={styles["meeting-item"]} id="meeting-item">
            <p className={styles["meeting-item-date"]}>{
                props.dateTime !== null &&
                props.dateTime !== undefined && props.dateTime !== ""
                ? props.dateTime : ''
            }</p>
            <div className={styles["meeting-item-container"]}>
                <div className={styles["meeting-item-info"]}>
                <div className={styles["meeting-item-description"]}>
                    <h5 className={styles["meeting-item-title"]}>{props.title}</h5>
                    <p>{props.description}</p>
                    <p>Duración: {props.duration}</p>
                </div>
                <div className={styles["line-vertical"]}></div>
                <div className={styles["meeting-item-observation"]}>
                    <p>Observaciones: {props.observations}</p>
                </div>
                </div>
                <div className={styles["meeting-item-actions"]}>
                    {
                        props.votes !== null &&
                        props.votes !== undefined
                        ? props.votes > 0
                            ? <p className={styles["votes"]}>{props.votes} <br />votos</p>
                            : <a id="vote" href={props.voteUrl}><img src={check} alt="" /></a>
                        : <a id="vote" href={props.voteUrl}><img src={check} alt="" /></a>
                    }
                    <a id="more" href={props.detailsUrl}>
                        <img src={arrow} alt="" />                  
                    </a>
                </div>
            </div>
        </div>
    );
}

export { CardMeeting };