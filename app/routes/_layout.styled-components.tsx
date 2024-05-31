import styled from "styled-components";
import Button from "~/components/button";
import { SpecialButton } from "~/components/button";
import { Heading } from "~/components/heading";
import { bearStore } from "~/store";
import { Tabs,TabList,Tab,TabPanels,TabPanel } from "@chakra-ui/react";
const WarningHeader = styled(Heading)`
  color: #000;
  background: #fde047;
`;

const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #94a3b8;
  margin: 10px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: #fff;
  color: #f97316;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
  ${Link}:hover & {
    fill: #f97316;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

export default function StyleTest() {
  const bears = bearStore((state) => state.bears)
  return (
    <>
      <WarningHeader>⚠️ Beware {bears} bears 🐻 around here...</WarningHeader>
      <Heading>
        Heading Component
      </Heading>
      {/* <HorizontalLine/>
      <Button>Primary</Button>
      <Button secondary={true}>Secondary</Button>
      <Button inverse={true} big={true}>Big & Inverse</Button>
      <SpecialButton>Special ✨</SpecialButton>
      <HorizontalLine/>
      <Link href="#">
        <Icon viewBox="0 0 20 20">
          <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
        </Icon>
        <Label>Hovering my parent changes my style!</Label>
      </Link>
      <HorizontalLine/> */}
      <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  );
};