import { Trigger, Content, Item } from './style'

import { IconChevronDown } from '../../assets/icons/icon-chevron-down.svg'

import * as Select from '@radix-ui/react-select'

export function SelectInput({ onChange, value, options = [], ...rest }) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Trigger {...rest}>
        <Select.Value placeholder="Selecione sua categoria" />
        <Select.Icon>
          <IconChevronDown size={24} color="#C4C4CC" />
        </Select.Icon>
      </Trigger>

      <Select.Portal>
        <Content>
          <Select.ScrollUpButton />

          <Select.Viewport>
            <Select.Group>
              {options &&
                options.map((option) => {
                  return (
                    <Item value={option.value} key={option.value}>
                      <Select.ItemText>{option.label}</Select.ItemText>
                    </Item>
                  )
                })}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton />
        </Content>
      </Select.Portal>
    </Select.Root>
  )
}
