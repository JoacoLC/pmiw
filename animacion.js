function get_frame(frames, vel_anim) {
  let i = floor(frameCount / vel_anim) % frames.length;
  return frames[i];
}
