import cx from "clsx";
import { useState } from "react";
import {
  UnstyledButton,
  Text,
  Group,
  Menu,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import classes from "./UserMenu.module.css";

export const UserMenu = () => {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
        >
          <Group gap={7}>
            <IconUser style={{ width: rem(16), height: rem(16) }} stroke={2} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
              stroke={1.5}
            />
          }
        >
          Liked posts
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconStar
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[6]}
              stroke={1.5}
            />
          }
        >
          Saved posts
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessage
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
              stroke={1.5}
            />
          }
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Account settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSwitchHorizontal
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Change account
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconLogout
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Logout
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={
            <IconPlayerPause
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Pause subscription
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
