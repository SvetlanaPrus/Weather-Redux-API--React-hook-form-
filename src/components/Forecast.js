import React from 'react';

export const Forecast = () => {
    return (
        <div className = 'forecast'>
            <div className = 'forecast'>
                <div className = 'day sunny selected'><p>суббота</p><span>20</span></div>
                <div className = 'day rainy'><p>воскресенье</p><span>22</span></div>
                <div className = 'day rainy'><p>понедельник</p><span>23</span></div>
                <div className = 'day cloudy'><p>вторник</p><span>25</span></div>
                <div className = 'day sunny'><p>среда</p><span>22</span></div>
                <div className = 'day sunny'><p>четверг</p><span>21</span></div>
                <div className = 'day rainy'><p>пятница</p><span>29</span></div>
            </div>
        </div>
    );
};
