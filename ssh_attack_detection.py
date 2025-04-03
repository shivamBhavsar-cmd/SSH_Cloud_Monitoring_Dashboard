import matplotlib.pyplot as plt
import os

# Ensure the output directory exists
output_dir = "output"
os.makedirs(output_dir, exist_ok=True)

# Sample data
time = ["10:00", "10:10", "10:20", "10:30", "10:40"]
ssh_attempts = [10, 15, 30, 25, 40]

# Generate plot
plt.figure(figsize=(8, 5))
plt.plot(time, ssh_attempts, marker='o', linestyle='-', color='r', label="SSH Attack Attempts")
plt.xlabel("Time")
plt.ylabel("Number of Attempts")
plt.title("SSH Attack Attempts Over Time")
plt.legend()
plt.grid(True)

# Save image
image_path = os.path.join(output_dir, "ssh_attack_distribution.png")
plt.savefig(image_path)
print(f"SSH attack distribution image saved: {image_path}")

# Save text output
ssh_text_output = """Predicting attacks...
Visualizing results...
Providing mitigation steps...
Data row 0: Predicted Attack Type: PortScan
1. Use firewalls to block unused ports.
2. Set up intrusion detection and prevention systems (IDS/IPS).
3. Regularly monitor network traffic for unusual activities.
--------------------------------------------------
Data row 1: Predicted Attack Type: Infiltration
1. Update all software to patch vulnerabilities.
2. Use strong authentication and encryption protocols.
3. Monitor for suspicious activity.
--------------------------------------------------
Data row 2: Predicted Attack Type: Benign
No malicious activity detected.
--------------------------------------------------
Data row 3: Predicted Attack Type: DDoS
1. Implement rate limiting.
2. Use firewalls or intrusion detection systems (IDS).
3. Block malicious IPs or patterns.
4. Employ anti-DDoS protection services.
"""

ssh_text_path = os.path.join(output_dir, "ssh_result.txt")
with open(ssh_text_path, "w") as file:
    file.write(ssh_text_output)

print(ssh_text_output)
print(f"SSH attack details saved: {ssh_text_path}")
