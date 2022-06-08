import { Container } from './styles';
import { UseFormRegister } from 'react-hook-form';

interface SelectProps{

    options: string[],
    name: string,
}

export function Select({  options, name, ...rest }:SelectProps) {
    return (
        <Container>
            <select name={name} key={name} {...rest}>
                {options.map(value => (
                <option value={value}>{value}</option>
                ))}
            </select>
      </Container>
    );
  }