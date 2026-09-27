import { BlockList, isIP } from "node:net";

const blocked = new BlockList();

function block4(address: string, prefix: number) {
  blocked.addSubnet(address, prefix, "ipv4");
}

function block6(address: string, prefix: number) {
  blocked.addSubnet(address, prefix, "ipv6");
}

block4("0.0.0.0", 8);
block4("10.0.0.0", 8);
block4("100.64.0.0", 10);
block4("127.0.0.0", 8);
block4("169.254.0.0", 16);
block4("172.16.0.0", 12);
block4("192.0.0.0", 24);
block4("192.0.2.0", 24);
block4("192.168.0.0", 16);
block4("198.18.0.0", 15);
block4("198.51.100.0", 24);
block4("203.0.113.0", 24);
block4("224.0.0.0", 4);
block4("240.0.0.0", 4);

block6("::", 128);
block6("::1", 128);
block6("fc00::", 7);
block6("fe80::", 10);
block6("ff00::", 8);
block6("2001:db8::", 32);
block6("100::", 64);

function bareAddress(address: string): string {
  return address.trim().replace(/^\[|\]$/g, "");
}

function ipv4FromMapped(address: string): string | null {
  const dotted = address.match(/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/i);
  if (dotted) return dotted[1] ?? null;
  const hex = address.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (!hex?.[1] || !hex[2]) return null;
  const high = Number.parseInt(hex[1], 16);
  const low = Number.parseInt(hex[2], 16);
  return `${(high >> 8) & 255}.${high & 255}.${(low >> 8) & 255}.${low & 255}`;
}

export function isBlockedAddress(address: string): boolean {
  const bare = bareAddress(address).toLowerCase();
  const mapped = ipv4FromMapped(bare);
  if (mapped) return isBlockedAddress(mapped);
  const version = isIP(bare);
  if (version === 4) return blocked.check(bare, "ipv4");
  if (version === 6) return blocked.check(bare, "ipv6");
  return true;
}
