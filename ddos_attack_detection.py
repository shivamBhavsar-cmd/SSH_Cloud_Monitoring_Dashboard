import matplotlib.pyplot as plt
import os

# Ensure the output directory exists
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Sample data
time = ["10:00", "10:10", "10:20", "10:30", "10:40"]
ddos_requests = [100, 250, 300, 500, 700]

# Generate plot
plt.figure(figsize=(8, 5))
plt.plot(time, ddos_requests, marker='o', linestyle='-', color='b', label="DDoS Requests")
plt.xlabel("Time")
plt.ylabel("Number of Requests")
plt.title("DDoS Attack Intensity Over Time")
plt.legend()
plt.grid(True)

# Save image
image_path = os.path.join(output_dir, "ddos_attack_distribution.png")
plt.savefig(image_path)
print(f"DDoS attack distribution image saved: {image_path}")

# Save text output
ddos_text_output = """Detected Attacks: {'Normal', 'UDP-Lag', 'DNS', 'SYN'}

Automated Mitigation Plan:
- Mitigation: Use a firewall to block unwanted UDP traffic.
- Mitigation: Rate-limit DNS queries, enable DNSSEC.
- Mitigation: Enable SYN Cookies, Limit Connection Rate."""

ddos_text_path = os.path.join(output_dir, "ddos_result.txt")
with open(ddos_text_path, "w") as file:
    file.write(ddos_text_output)

print(ddos_text_output)
print(f"DDoS attack details saved: {ddos_text_path}")
