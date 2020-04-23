import React from 'react';
import './Hexagons.css';
import { hexDetail } from '../../Profile'
import { Icon } from '@iconify/react';
import speedometerIcon from '@iconify/icons-mdi/speedometer';
import cellphoneLink from '@iconify/icons-mdi/cellphone-link';
import lightBulbOutline from '@iconify/icons-mdi/lightbulb-outline';
import rocket from '@iconify/icons-mdi/rocket';
import Flip from 'react-reveal/Flip';

export default function Hexagons() {
    return (
        <div className="hex-wrap">
            <div className="row">

                <div className="hex-col">
                    <Flip right>
                        <div className="hexagon">
                            <div className="hexagon-img">
                                <Icon icon={speedometerIcon} width="80px" color="#fff"/>
                            </div>
                        </div>
                        <div className="hex-text">
                            <div className="hex-heading">{hexDetail.Fast.heading}</div>
                            <p className="para-color hex-para">{hexDetail.Fast.description}</p>
                        </div>
                    </Flip>
                </div>

                <div className="hex-col">
                    <Flip right>
                        <div className="hexagon">
                            <div className="hexagon-img">
                                <Icon icon={cellphoneLink} width="80px" color="#fff"/>
                            </div>
                        </div>
                        <div className="hex-text">
                            <div className="hex-heading">{hexDetail.Responsive.heading}</div>
                            <p className="para-color hex-para">{hexDetail.Responsive.description}</p>
                        </div>
                    </Flip>
                </div>

                <div className="hex-col">
                    <Flip right>
                        <div className="hexagon">
                            <div className="hexagon-img">
                                <Icon icon={lightBulbOutline} width="80px" color="#fff"/>
                            </div>
                        </div>
                        <div className="hex-text">
                            <div className="hex-heading">{hexDetail.Intuitive.heading}</div>
                            <p className="para-color hex-para">{hexDetail.Intuitive.description}</p>
                        </div>
                    </Flip>
                </div>

                <div className="hex-col">
                    <Flip right>
                        <div className="hexagon">
                            <div className="hexagon-img">
                                <Icon icon={rocket} width="80px" color="#fff"/>
                            </div>
                        </div>
                        <div className="hex-text">
                            <div className="hex-heading">{hexDetail.Dynamic.heading}</div>
                            <p className="para-color hex-para">{hexDetail.Dynamic.description}</p>
                        </div>
                    </Flip>
                </div>
                
            </div>
        </div>
    )
}
