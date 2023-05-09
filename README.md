# custom-hook-timer-react

A Timer component with customisable initial time value and step period duration that can be controlled using "Start"/"Pause" and "Reset" buttons.

## Usage

```
<Timer initialValue={0} step={1000} label="1s Timer" />
```

### Props

### `initialValue`
Sets the initial time value from which the timer should start.
Defaults to `0`.

### `step`
Sets the initial step period duration in ms with which the timer should update.
Defaults to `1000`.

### `label`
Sets the label to display underneath the timer.
Defaults to `"Timer"`.

## Examples

### Ns Timer
Customise the value of step period duration in seconds using the `n:` input.
```
<Timer initialValue={0} step={n * 1000} />
```

### Created with CodeSandbox
