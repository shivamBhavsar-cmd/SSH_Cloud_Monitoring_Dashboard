import matplotlib.pyplot as plt

# Sample data (Replace this with real detection data)
ssh_attempts = [10, 15, 30, 25, 40]
timestamps = ["10:00", "10:10", "10:20", "10:30", "10:40"]

# Create the plot
plt.figure(figsize=(8, 5))
plt.plot(timestamps, ssh_attempts, marker='o', linestyle='-', color='r', label='SSH Attack Attempts')
plt.xlabel("Time")
plt.ylabel("Number of Attempts")
plt.title("SSH Attack Attempts Over Time")
plt.legend()

# Save the plot as an image
output_path = "output/ssh_attack_distribution.png"
plt.savefig(output_path)
print(f"SSH attack distribution image saved: {output_path}")
plt.close()
