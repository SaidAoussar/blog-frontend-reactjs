import { Typography } from "antd";
import { Outlet } from "react-router-dom";
import Container from "../../components/utils/Container";
import LeftSidebar from "./components/left-sidebar/LeftSidebar";
import { useUserStore } from "../../store/user";
import styled from "styled-components";

const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.base[100]};
  }
`;
const Settings = () => {
  const authUser = useUserStore((state) => state.user);
  return (
    <Container>
      <Title level={2}>Settings For @{authUser.username}</Title>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          columnGap: "10px",
        }}
      >
        <LeftSidebar />
        <Outlet />
      </section>
    </Container>
  );
};

export default Settings;
