import React from "react";
import Navbar from "../../components/navBar";
import "./calender.css";
const Calender = () => {
  return (
    <>
      <Navbar />
      <div className="calender__container">
        <table>
          <thead>
            <tr>
              <th colSpan="7">Obrober 2023</th>
            </tr>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>

          <tbody>
            {/* loop over the tr and td and display numbers form 1 to 31 */}

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td className="active">4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td className="active">12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td className="active">18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td className="active">26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calender;
