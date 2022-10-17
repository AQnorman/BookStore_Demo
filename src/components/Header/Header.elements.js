import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #303030;
`;

export const Logo = styled(Link)`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  text-decoration: none;
`;

export const RoutesContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const Route = styled(NavLink)`
  color: white;
  font-size: 20px;
  margin-left: 20px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
  }
`;
