// index.jsx
import * as Popover from "@radix-ui/react-popover";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className="bg-white rounded-md">More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="rounded-md p-5 w-64 bg-white">
        Some more info…
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
