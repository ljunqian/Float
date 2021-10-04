import { AriaSliderProps, AriaSliderThumbProps } from "@react-types/slider";
import { HTMLAttributes, LabelHTMLAttributes, OutputHTMLAttributes, RefObject, InputHTMLAttributes } from "react";
import { SliderState } from "@react-stately/slider";
interface SliderAria {
    /** Props for the label element. */
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    /** Props for the root element of the slider component; groups slider inputs. */
    groupProps: HTMLAttributes<HTMLElement>;
    /** Props for the track element. */
    trackProps: HTMLAttributes<HTMLElement>;
    /** Props for the output element, displaying the value of the slider thumbs. */
    outputProps: OutputHTMLAttributes<HTMLOutputElement>;
}
/**
 * Provides the behavior and accessibility implementation for a slider component representing one or more values.
 *
 * @param props Props for the slider.
 * @param state State for the slider, as returned by `useSliderState`.
 * @param trackRef Ref for the "track" element.  The width of this element provides the "length"
 * of the track -- the span of one dimensional space that the slider thumb can be.  It also
 * accepts click and drag motions, so that the closest thumb will follow clicks and drags on
 * the track.
 */
export function useSlider(props: AriaSliderProps, state: SliderState, trackRef: RefObject<HTMLElement>): SliderAria;
interface SliderThumbAria {
    /** Props for the root thumb element; handles the dragging motion. */
    thumbProps: HTMLAttributes<HTMLElement>;
    /** Props for the visually hidden range input element. */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    /** Props for the label element for this thumb (optional). */
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
}
interface SliderThumbOptions extends AriaSliderThumbProps {
    /** A ref to the track element. */
    trackRef: RefObject<HTMLElement>;
    /** A ref to the thumb input element. */
    inputRef: RefObject<HTMLInputElement>;
}
/**
 * Provides behavior and accessibility for a thumb of a slider component.
 *
 * @param opts Options for this Slider thumb.
 * @param state Slider state, created via `useSliderState`.
 */
export function useSliderThumb(opts: SliderThumbOptions, state: SliderState): SliderThumbAria;

//# sourceMappingURL=types.d.ts.map
