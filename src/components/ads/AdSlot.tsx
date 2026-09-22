export type AdPlacement =
  | "tool-intro"
  | "tool-results"
  | "guide";

type AdSlotProps = {
  placement: AdPlacement;
};

export function AdSlot({ placement }: AdSlotProps) {
  void placement;
  // Renders nothing until advertising is explicitly enabled.
  // Future ads must not cover inputs, file pickers, or private output.
  return null;
}
